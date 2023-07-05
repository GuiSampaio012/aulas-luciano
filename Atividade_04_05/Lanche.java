public class Lanche {

    int preco;
    String nome;
    public int getPreco() {
        return preco;
    }

    public Lanche(int preco, String nome) {
        this.preco = preco;
        this.nome = nome;
    }

    public Lanche() {
    }

    public String getNome() {
        return nome;
    }

    public void setPreco(int preco) {
        this.preco = preco;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }


//    public Lanche (int preco, String nome){
//        this.nome = nome;
//        this.preco = preco;
//    }

}
