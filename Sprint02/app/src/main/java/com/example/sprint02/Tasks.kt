package com.example.sprint02

import android.content.Intent
import android.os.Bundle
import android.widget.ImageView
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import com.example.sprint02.databinding.ActivityTasksBinding
import com.google.firebase.firestore.FirebaseFirestore

class Tasks : AppCompatActivity() {


    private val binding by lazy {
        ActivityTasksBinding.inflate(layoutInflater)
    }

    private val bancoDados by lazy {
        FirebaseFirestore.getInstance()
    }

    lateinit var btnVoltar3: ImageView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(binding.root)

        // Configuração do botão para salvar a tarefa
        binding.buttonAdicionarTarefa.setOnClickListener {
            salvarTarefa()
        }

        btnVoltar3= findViewById(R.id.btnVoltar)
        // Define um listener de clique para o botão
        btnVoltar3.setOnClickListener {
            // Cria uma intenção para navegar para a TelaDois
            val NavegarTelaInicial = Intent(this, MainActivity::class.java)
            // Inicia a atividade TelaDois
            startActivity(NavegarTelaInicial)
        }
    }

    private fun salvarTarefa() {
        // Dados para salvar no banco
        val dados = mapOf(
            "descricaoTarefa" to binding.editTextTarefa.text.toString()
        )

        // Salvando a tarefa no Firestore
        bancoDados.collection("tarefas")
            .add(dados)
            .addOnSuccessListener {
                AlertDialog.Builder(this)
                    .setTitle("Sucesso")
                    .setMessage("Tarefa adicionada com sucesso.")
                    .setPositiveButton("OK") { dialog, _ -> dialog.dismiss() }
                    .create()
                    .show()
            }
            .addOnFailureListener {
                AlertDialog.Builder(this)
                    .setTitle("Erro")
                    .setMessage("Erro ao adicionar tarefa.")
                    .setPositiveButton("OK") { dialog, _ -> dialog.dismiss() }
                    .create()
                    .show()
            }
    }
}
