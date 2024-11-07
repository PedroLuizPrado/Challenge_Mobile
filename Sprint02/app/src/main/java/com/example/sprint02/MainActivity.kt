package com.example.sprint02

import android.content.Intent
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import com.example.sprint02.databinding.ActivityMainBinding
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.FirebaseFirestore

class MainActivity : AppCompatActivity() {

    private val binding by lazy {
        ActivityMainBinding.inflate(layoutInflater)
    }

    private val autenticacao by lazy {
        FirebaseAuth.getInstance()
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(binding.root)

        binding.loginButton.setOnClickListener {
            logarUsuario()
        }

        binding.forgotPasswordText.setOnClickListener {
            esqueceuSenha()
        }

        binding.registerText.setOnClickListener {
            val intent = Intent(this, SignUp::class.java)
            startActivity(intent)
        }

        // Verificar se o usuário está logado ao iniciar a MainActivity
        verificarUsuarioLogado()
    }

    private fun verificarUsuarioLogado() {
        val usuario = autenticacao.currentUser
        if (usuario != null) {
            Log.d("MainActivity", "Usuário logado: ${usuario.email}")
            // Redirecionar para a Home diretamente se o usuário estiver logado
            val intent = Intent(this, Home::class.java)
            startActivity(intent)
            finish()  // Fecha a MainActivity para não voltar nela
        } else {
            Log.d("MainActivity", "Nenhum usuário logado.")
        }
    }

    private fun logarUsuario() {
        val email = binding.emailEditText.text.toString()
        val senha = binding.passwordEditText.text.toString()

        autenticacao.signInWithEmailAndPassword(email, senha)
            .addOnSuccessListener {
                Log.d("MainActivity", "Login bem-sucedido.")
                // Redirecionar para a Home diretamente após o login bem-sucedido
                val intent = Intent(this, Home::class.java)
                startActivity(intent)
                finish()  // Fecha a MainActivity para não voltar nela
            }
            .addOnFailureListener { exception ->
                Log.e("MainActivity", "Erro no login: ${exception.message}")
                AlertDialog.Builder(this)
                    .setTitle("Erro")
                    .setMessage("Verificar e-mail ou senha")
                    .setPositiveButton("OK") { dialog, _ -> dialog.dismiss() }
                    .create().show()
            }
    }

    private fun esqueceuSenha() {
        val email = binding.emailEditText.text.toString()
        autenticacao.sendPasswordResetEmail(email)
            .addOnSuccessListener {
                AlertDialog.Builder(this)
                    .setTitle("Recuperação de Senha")
                    .setMessage("E-mail de recuperação enviado.")
                    .setPositiveButton("OK") { dialog, _ -> dialog.dismiss() }
                    .create().show()
            }
            .addOnFailureListener {
                AlertDialog.Builder(this)
                    .setTitle("Erro")
                    .setMessage("Erro ao enviar e-mail de recuperação")
                    .setPositiveButton("OK") { dialog, _ -> dialog.dismiss() }
                    .create().show()
            }
    }
}
