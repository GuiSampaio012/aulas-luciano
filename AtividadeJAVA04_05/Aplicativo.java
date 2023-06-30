import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

public class Aplicativo {

    CadastrarRestaurante restaurante2 = new CadastrarRestaurante();
    CadastroUsuario usuarios = new CadastroUsuario();
    public ArrayList<Usuario> listaUsuarios = new ArrayList<>();
    public ArrayList<Restaurante> listaRestaurante = new ArrayList<>();


    public void cadastrarUsuario() {


        listaUsuarios.add(new Usuario(usuarios.campoNome.getText(),usuarios.campoCpf.getText(),usuarios.campoEndereco.getText()));

    }


    public String imprimirUsuarios (){
        String vazio = "";
        for (Usuario usuario : getListaUsuarios()) {
            vazio = vazio.concat("nome do usuario: " + usuario.nome + "\n" + "cpf do usuario: " + usuario.cpf + "\n" + "endereço do usuario: " + usuario.endereco + "\n\n");
        }

        return vazio;
    }
    public void cadastrarRestaurante(){
        Restaurante restaurante = new Restaurante();



        listaRestaurante.add(new Restaurante(restaurante2.campoNome.getText(), restaurante2.campoNome.getText(),restaurante2.campoEndereco.getText()));


//            String vazio = "";
//            for (Restaurante restaurante1: listaRestaurante){
//                vazio = vazio.concat("nome do restaurante: "+ restaurante.nome + "\n" + "localização do restaurante: "+restaurante.localizacao+"\n\n");
//            }
//            System.out.println(vazio);
    }
    public String imprimirRestaurantes(){
        String vazio = "";
        for (Restaurante restaurante : getListaRestaurante()) {
            vazio = vazio.concat("nome do restaurante: " + restaurante.nome + "\n"  + "endereço do restaurante: " + restaurante.localizacao + "\n"+ "cnpj do restaurante: " + restaurante.cnpj + "\n" +"\n");
        }

        return vazio;
    }
    public void menu(){

        Tela tela = new Tela();
        tela.setVisible(true);
        tela.getBotaoCadastrarRestaurante().addActionListener(e -> restaurante2.setVisible(true));
        tela.getBotaoCadastrarUsuario().addActionListener(e -> usuarios.setVisible(true));
        ArrayList<Usuario>usuarios1=new ArrayList<>();
        Usuario usuario = new Usuario();



        EscolherUserRestaurante pedido2 = new EscolherUserRestaurante(listaUsuarios, listaRestaurante);
        pedido2.setListaUsuarios(listaUsuarios);
        pedido2.botaoEscolherRestUser.addActionListener(e -> System.out.println(listaUsuarios));
        tela.getBotaoFazerPedido().addActionListener(e -> {pedido2.setVisible(true); System.out.println(listaUsuarios);});

        usuarios.botaoCadastrar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                cadastrarUsuario();
                System.out.println(imprimirUsuarios());
            }
        });

        restaurante2.botaoCadastrar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                cadastrarRestaurante();
                System.out.println(imprimirRestaurantes());
            }
        });



    }


    public ArrayList<Usuario> getListaUsuarios() {
        return listaUsuarios;
    }

    public void setListaUsuarios(ArrayList<Usuario> listaUsuarios) {
        this.listaUsuarios = listaUsuarios;
    }

    public ArrayList<Restaurante> getListaRestaurante() {
        return listaRestaurante;
    }

    public void setListaRestaurante(ArrayList<Restaurante> listaRestaurante) {
        this.listaRestaurante = listaRestaurante;
    }
}
