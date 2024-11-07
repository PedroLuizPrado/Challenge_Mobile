package com.example.sprint02

import android.annotation.SuppressLint
import android.content.Intent
import android.os.Bundle
import android.widget.ImageView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class Recompensas : AppCompatActivity() {
    lateinit var btnVoltar2: ImageView
    @SuppressLint("MissingInflatedId")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_recompensas)
        btnVoltar2= findViewById(R.id.btnVoltar2)
        // Define um listener de clique para o botão
        btnVoltar2.setOnClickListener {
            // Cria uma intenção para navegar para a TelaDois
            val NavegarTelaInicial = Intent(this, MainActivity::class.java)
            // Inicia a atividade TelaDois
            startActivity(NavegarTelaInicial)
        }
    }
}