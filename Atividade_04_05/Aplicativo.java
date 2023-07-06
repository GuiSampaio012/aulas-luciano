import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.Arrays;



public class Aplicativo {
    CadastrarRestaurante restaurante2 = new CadastrarRestaurante();
    static Lanche lanche10 = new Lanche(10,"filé");
    CadastroUsuario usuarios = new CadastroUsuario();
    EscolherUserRestaurante pedido2 = new EscolherUserRestaurante();
    static Restaurante restaurante = new Restaurante("claudio batatas","38451961","rua da alvorada",  new ArrayList<Lanche>(Arrays.asList(lanche10)));
    public static ArrayList<Usuario> listaUsuarios = new ArrayList<>();
    public static ArrayList<Restaurante> listaRestaurante = new ArrayList<>(Arrays.asList(restaurante));
    FazerPedido valorLanche = new FazerPedido();


    public void cadastrarUsuario() {
        Usuario usuario = new Usuario();
        usuario.nome = usuarios.campoNome.getText();
        usuario.cpf = usuarios.campoCpf.getText();
        usuario.endereco = usuarios.campoEndereco.getText();
        listaUsuarios.add(usuario);
    }
    public String imprimirUsuarios (){
        String vazio = "";
        for (Usuario usuario : listaUsuarios) {
            vazio = vazio.concat("nome do usuario: " + usuario.nome + "\n" + "cpf do usuario: " + usuario.cpf + "\n" + "endereço do usuario: " + usuario.endereco + "\n\n");
        }

        return vazio;
    }

    public void cadastrarRestaurante(){
        Restaurante restaurante5 = new Restaurante();
        Tela tela = new Tela();

        restaurante5.nome = restaurante2.campoNome.getText();
        restaurante5.cnpj = restaurante2.campoCnpj.getText();
        restaurante5.localizacao = restaurante2.campoEndereco.getText();
        System.out.println(imprimirUsuarios());
        valorLanche.botaoCriarLanche.addActionListener(e->{
            cadastrarLanche(restaurante5);
        });
        listaRestaurante.add(restaurante5);
    }

    public void cadastrarLanche(Restaurante res){
        valorLanche.setVisible(true);
        restaurante2.dispose();
        Lanche lanche8 = new Lanche();
//        res.cardapio.clear();

        lanche8.nome = valorLanche.campoNomeLanche.getText();
        lanche8.preco = Integer.parseInt(valorLanche.campoPreco.getText());

        System.out.println(lanche8.getNome());
        System.out.println(lanche8.getPreco());
        res.cardapio.add(lanche8);
        System.out.println("eis o cadastro");
        System.out.println(res.cardapio);
        System.out.println(restaurante.cardapio);
    }
    public String imprimirRestaurantes(){
        String vazio = "";
        for (Restaurante restaurante : listaRestaurante) {
            vazio = vazio.concat("nome do restaurante: " + restaurante.nome + "\n"  + "endereço do restaurante: " + restaurante.localizacao + "\n"+ "cnpj do restaurante: " + restaurante.cnpj + "\n" +"\n");
        }

        return vazio;
    }

    public void menu(){
        //  chamando as telas
        Tela tela = new Tela();
        tela.setVisible(true);
        tela.getBotaoCadastrarRestaurante().addActionListener(e -> restaurante2.setVisible(true));
        tela.getBotaoCadastrarUsuario().addActionListener(e -> usuarios.setVisible(true));

        //  dando valor para listas em outras telas
        tela.getBotaoFazerPedido().addActionListener(e -> {
            EscolherUserRestaurante.nomeUser.clear();
            EscolherUserRestaurante.nomeRes.clear();
            for (Usuario usuario : Aplicativo.listaUsuarios) {
                EscolherUserRestaurante.nomeUser.add(usuario.getNome());
            }
            for (Restaurante restaurante : listaRestaurante) {
                EscolherUserRestaurante.nomeRes.add(restaurante.getNome());
            }
            System.out.println(EscolherUserRestaurante.nomeRes);
            System.out.println(EscolherUserRestaurante.nomeUser);
            System.out.println(pedido2.campoUser.getSelectedItem());
            pedido2.atualizarVetor();
            pedido2.setVisible(true);
        });



        // criando funções para botões de outras telas

        pedido2.botaoEscolherRestUser.addActionListener(e->{
            System.out.println("nome do usuário escolhido: "+EscolherUserRestaurante.escolhaUser);
            System.out.println("nome do restaurante escolhido: "+EscolherUserRestaurante.escolhaRes);
            for (Restaurante restaurante5:listaRestaurante) {
                if (restaurante5.getNome().equals(EscolherUserRestaurante.escolhaRes))
                    for (Lanche lanche: restaurante5.cardapio) {
                        System.out.println(lanche.nome);
                    }

            }
        });

//        valorLanche.botaoCriarLanche.addActionListener(e->{
//            cadastrarRestaurante();
//        });

        usuarios.botaoCadastrar.addActionListener(e -> {
            cadastrarUsuario();
        });

        restaurante2.botaoCadastrar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                cadastrarRestaurante();
                restaurante2.dispose();
                valorLanche.setVisible(true);
                System.out.println(imprimirRestaurantes());
            }
        });
    }


}
