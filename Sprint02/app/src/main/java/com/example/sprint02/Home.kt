package com.example.sprint02

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.sprint02.databinding.ActivityHomeBinding
import com.google.firebase.auth.FirebaseAuth

class Home : AppCompatActivity() {

    private val binding by lazy {
        ActivityHomeBinding.inflate(layoutInflater)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(binding.root)

        // Recebe o nome passado na Intent para personalizar a saudação
        val nome = intent.getStringExtra("nome") ?: "Usuário"
        binding.textSaudacao.text = "Olá, $nome"

        // Configura o botão de logout
        binding.btnLogout.setOnClickListener {
            realizarLogout()
        }

        // Navegação para a tela BetterTeeth (Análise dos dentes)
        binding.linearLayout.setOnClickListener {
            val intent = Intent(this, BetterTeeth::class.java)
            startActivity(intent)
        }

        // Navegação para a tela Recompensas
        binding.linearLayout2.setOnClickListener {
            val intent = Intent(this, Recompensas::class.java)
            startActivity(intent)
        }

        // Navegação para a tela Tasks (Tarefas Diárias)
        binding.linearLayout3.setOnClickListener {
            val intent = Intent(this, Tasks::class.java)
            startActivity(intent)
        }
    }

    // Função para realizar o logout e redirecionar para a tela de login
    private fun realizarLogout() {
        FirebaseAuth.getInstance().signOut()
        val intent = Intent(this, MainActivity::class.java)
        intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
        startActivity(intent)
        finish()
    }
}