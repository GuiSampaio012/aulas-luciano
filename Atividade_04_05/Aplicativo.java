import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;



public class Aplicativo {
    CadastrarRestaurante restaurante2 = new CadastrarRestaurante();
    CadastroUsuario usuarios = new CadastroUsuario();
    EscolherUserRestaurante pedido2 = new EscolherUserRestaurante();

    public static ArrayList<Usuario> listaUsuarios = new ArrayList<>();
    public static ArrayList<Restaurante> listaRestaurante = new ArrayList<>();


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
        Restaurante restaurante = new Restaurante();
        restaurante.nome = restaurante2.campoNome.getText();
        restaurante.cnpj = restaurante2.campoCnpj.getText();
        restaurante.localizacao = restaurante2.campoEndereco.getText();
        listaRestaurante.add(restaurante);
    }
    public String imprimirRestaurantes(){
        String vazio = "";
        for (Restaurante restaurante : listaRestaurante) {
            vazio = vazio.concat("nome do restaurante: " + restaurante.nome + "\n"  + "endereço do restaurante: " + restaurante.localizacao + "\n"+ "cnpj do restaurante: " + restaurante.cnpj + "\n" +"\n");
        }

        return vazio;
    }
    public void menu(){
        Tela tela = new Tela();
        tela.setVisible(true);
        tela.getBotaoCadastrarRestaurante().addActionListener(e -> restaurante2.setVisible(true));
        tela.getBotaoCadastrarUsuario().addActionListener(e -> usuarios.setVisible(true));
        tela.getBotaoFazerPedido().addActionListener(e -> {
            EscolherUserRestaurante.nomeUser.clear();
            EscolherUserRestaurante.nomeRes.clear();
            for (Usuario usuario : Aplicativo.listaUsuarios) {
                EscolherUserRestaurante.nomeUser.add(usuario.getNome());
            }
            for (Restaurante restaurante : Aplicativo.listaRestaurante) {
                EscolherUserRestaurante.nomeRes.add(restaurante.getNome());
            }
            System.out.println(EscolherUserRestaurante.nomeRes);
            System.out.println(EscolherUserRestaurante.nomeUser);
            System.out.println(pedido2.campoUser.getSelectedItem());
            pedido2.atualizarVetor();
            pedido2.setVisible(true);
        });

        pedido2.botaoEscolherRestUser.addActionListener(e->{
//            System.out.println("nome do usuário escolhido"+pedido2.campoUser.getSelectedItem());
//            System.out.println("nome do restaurante escolhido"+pedido2.campoRes.getSelectedItem());
            System.out.println("nome do usuário escolhido: "+EscolherUserRestaurante.escolhaUser);
            System.out.println("nome do restaurante escolhido: "+EscolherUserRestaurante.escolhaRes);
        });

        usuarios.botaoCadastrar.addActionListener(e -> {
            cadastrarUsuario();
            System.out.println(imprimirUsuarios());
        });

        restaurante2.botaoCadastrar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                cadastrarRestaurante();
                System.out.println(imprimirRestaurantes());
            }
        });
    }


}
