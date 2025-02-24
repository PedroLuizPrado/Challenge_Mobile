package com.example.sprint02

import android.content.Intent
import android.os.Bundle
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.example.sprint02.databinding.ActivitySignUpBinding
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.FirebaseFirestore

class SignUp : AppCompatActivity() {

    private val binding by lazy {
        ActivitySignUpBinding.inflate(layoutInflater)
    }

    private val autenticacao by lazy {
        FirebaseAuth.getInstance()
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge() // Modo de layout sem barras do sistema
        setContentView(binding.root)

        // Configura as margens de acordo com as barras do sistema (status bar, navigation bar)
        ViewCompat.setOnApplyWindowInsetsListener(binding.root) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        // Configura o clique do botão de cadastro
        binding.btnCadastrar.setOnClickListener {
            cadastrarUsuario()
        }
    }

    private fun cadastrarUsuario() {
        // Obtém os dados inseridos nos campos de entrada
        val nome = binding.NomeEditText.text.toString().trim()
        val email = binding.emailEditText.text.toString().trim()
        val senha = binding.editSenha.text.toString().trim()
        val confirmarSenha = binding.EditConfirmarSenha.text.toString().trim()

        // Valida se as senhas coincidem
        if (senha != confirmarSenha) {
            Toast.makeText(this, "As senhas não coincidem.", Toast.LENGTH_SHORT).show()
            return
        }

        // Verifica se todos os campos estão preenchidos
        if (nome.isEmpty() || email.isEmpty() || senha.isEmpty() || confirmarSenha.isEmpty()) {
            Toast.makeText(this, "Por favor, preencha todos os campos.", Toast.LENGTH_SHORT).show()
            return
        }

        // Cria o usuário no Firebase com o email e senha
        autenticacao.createUserWithEmailAndPassword(email, senha)
            .addOnSuccessListener { authResult ->
                val id = authResult.user?.uid

                // Salvar nome e email no Firestore
                val firestore = FirebaseFirestore.getInstance()
                val usuario = hashMapOf(
                    "nome" to nome,
                    "email" to email
                )
                if (id != null) {
                    firestore.collection("usuarios").document(id).set(usuario)
                }

                // Exibe um Toast de sucesso
                Toast.makeText(this, "Cadastro realizado com sucesso!", Toast.LENGTH_LONG).show()

                // Redireciona para a Home, passando o nome do usuário
                val intent = Intent(this, Home::class.java)
                intent.putExtra("nome", nome)
                startActivity(intent)
                finish()  // Finaliza a tela de cadastro para evitar retorno
            }
            .addOnFailureListener { exception ->
                val mensagemErro = exception.message
                Toast.makeText(this, "Erro ao criar conta: $mensagemErro", Toast.LENGTH_LONG).show()
            }
    }
}