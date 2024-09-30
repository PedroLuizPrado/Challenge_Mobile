package com.example.odontoprevaap

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.ImageView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {

    lateinit var buttonFaceTeeth: ImageView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)

      buttonFaceTeeth= findViewById(R.id.btnFaceTeeth)
        // Define um listener de clique para o botão
        buttonFaceTeeth.setOnClickListener {
            // Cria uma intenção para navegar para a TelaDois
            val NavegarTelaFaceTeeth = Intent(this, FaceTeethPag::class.java)
            // Inicia a atividade TelaDois
            startActivity(NavegarTelaFaceTeeth)
        }

    }
}