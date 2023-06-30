import java.util.ArrayList;
import java.util.Scanner;

public class Restaurante {
    String nome;
    String cnpj;
    String localizacao;
    public Restaurante() {
    }
    public Restaurante(String nome, String cnpj, String localizacao) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.localizacao = localizacao;
    }



    public String getNome(){
        return nome;
    }
    public String getCnpj(){
        return cnpj;
    }
    public String getLocalizacao(){
        return localizacao;
    }

    ArrayList <Lanche> cardapio = new ArrayList<>();

    public void imprimirCardapio(){
        String vazio = "";
        for (Lanche lanche: cardapio){
            vazio = vazio.concat("nome do lanche: "+lanche.nome + "\n" + "preço do lanche: "+lanche.preco+"\n");
        }
        System.out.println(vazio);
    }
    public void adicionarLanche(){
        for (int i = 0; i <3 ; i++){
            Lanche lanche = new Lanche();
            Scanner entrada = new Scanner(System.in);
            System.out.println("qual será o nome do seu lanche ?");
            lanche.nome = entrada.nextLine();
            System.out.println("digite o preço do seu lanche: ");
            lanche.preco = entrada.nextInt();
            cardapio.add(lanche);
        }
        removerLanche();
        imprimirCardapio();
    }
    public void removerLanche(){
        Scanner entrada = new Scanner(System.in);
        int index = cardapio.size() - 1;
        System.out.println("qual lanche você deseja remover do pedido '0' ao pedido '"+ index+"' ?");
        int resposta = entrada.nextInt();
        cardapio.remove(resposta);
    }
//    public Restaurante (String nome, String localizacao){
//        this.nome = nome;
//        this. localizacao= localizacao;
//    }


}
