package com.example.sprint02

import android.content.Intent
import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import com.example.sprint02.databinding.ActivityHomeBinding

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

        // Configuração dos listeners para os cards

        // Card BetterTeeth
        val betterTeethCard = binding.linearLayout
        betterTeethCard.setOnClickListener {
            val intent = Intent(this, BetterTeeth::class.java)
            startActivity(intent)
        }

        // Card Recompensas
        val recompensasCard = binding.linearLayout2
        recompensasCard.setOnClickListener {
            val intent = Intent(this, Recompensas::class.java)
            startActivity(intent)
        }

        // Card Tasks
        val tasksCard = binding.linearLayout3
        tasksCard.setOnClickListener {
            val intent = Intent(this, Tasks::class.java)
            startActivity(intent)
        }
    }
}
