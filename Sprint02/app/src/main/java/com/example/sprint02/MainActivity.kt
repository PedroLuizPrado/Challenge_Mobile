package com.example.sprint02

import android.content.Intent
import android.os.Bundle
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

        verificarUsuarioLogado()
    }

    private fun verificarUsuarioLogado() {
        val usuario = autenticacao.currentUser
        if (usuario != null) {
            val firestore = FirebaseFirestore.getInstance()
            val usuarioId = usuario.uid
            firestore.collection("usuarios").document(usuarioId).get()
                .addOnSuccessListener { document ->
                    if (document.exists()) {
                        val nome = document.getString("nome") ?: "Usuário"
                        val intent = Intent(this, Home::class.java)
                        intent.putExtra("nome", nome)
                        startActivity(intent)
                        finish()
                    }
                }
        }
    }

    private fun logarUsuario() {
        val email = binding.emailEditText.text.toString()
        val senha = binding.passwordEditText.text.toString()

        autenticacao.signInWithEmailAndPassword(email, senha)
            .addOnSuccessListener {
                verificarUsuarioLogado()
            }
            .addOnFailureListener {
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
