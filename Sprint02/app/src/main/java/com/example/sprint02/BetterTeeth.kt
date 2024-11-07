package com.example.sprint02

import android.content.Intent
import android.os.Bundle
import android.widget.ImageView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import com.example.sprint02.R.id.btnVoltar

class BetterTeeth : AppCompatActivity() {

    lateinit var btnVoltar: ImageView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_better_teeth)
        btnVoltar= findViewById(R.id.btnVoltar)
        // Define um listener de clique para o botão
        btnVoltar.setOnClickListener {
            // Cria uma intenção para navegar para a TelaDois
            val NavegarTelaInicial = Intent(this, MainActivity::class.java)
            // Inicia a atividade TelaDois
            startActivity(NavegarTelaInicial)
        }
    }
}