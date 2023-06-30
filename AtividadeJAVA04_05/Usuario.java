import java.util.ArrayList;

public class Usuario {

    String cpf;
    String nome;
    String endereco;

    public Usuario() {

    }

    public Usuario(String cpf, String nome, String endereco) {
        this.cpf = cpf;
        this.nome = nome;
        this.endereco = endereco;
    }

    public String getNome(){
        return nome;
    }
    public String getCpf(){
        return cpf;
    }
    public String getEndereco(){
        return endereco;
    }

//    public Usuario (int cpf, String nome, String usuario){
//        this.nome = nome;
//        this.cpf = cpf;
//        this.usuario = usuario;
//    }
}
