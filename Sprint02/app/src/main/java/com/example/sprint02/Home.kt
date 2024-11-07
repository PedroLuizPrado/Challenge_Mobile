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

        // Receber o nome da Intent para personalizar a saudação
        val nome = intent.getStringExtra("nome") ?: "Usuário"
        binding.textSaudacao.text = "Olá, $nome"

        // Configurar o botão de logout
        binding.btnLogout.setOnClickListener {
            realizarLogout()
        }
    }

    // Função para realizar o logout
    private fun realizarLogout() {
        // Desconectar o usuário do Firebase
        FirebaseAuth.getInstance().signOut()

        // Redirecionar para a tela de login (MainActivity)
        val intent = Intent(this, MainActivity::class.java)
        intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK  // Limpa a pilha de atividades
        startActivity(intent)
        finish()  // Finaliza a atividade atual
    }
}
