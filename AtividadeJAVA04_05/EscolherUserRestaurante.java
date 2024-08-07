import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;
import java.util.Vector;
import java.util.Arrays;
import java.util.Objects;

public class EscolherUserRestaurante extends JFrame {

    public JComboBox campoNome;
    public JComboBox campoCnpj;
    public JButton botaoEscolherRestUser;

    private ArrayList<Usuario> listaUsuarios = new ArrayList<>();
    private ArrayList<Restaurante> listaRestaurante = new ArrayList<>();


    ArrayList<String> nomeRestauante = new ArrayList<>();
    ArrayList<String> nomeUsuario = new ArrayList<String>();
    public Object[] nomebla = nomeUsuario.toArray();

    public JButton getBotaoEscolherRestUser() {
        return botaoEscolherRestUser;
    }

    public void setBotaoEscolherRestUser(JButton botaoEscolherRestUser) {
        this.botaoEscolherRestUser = botaoEscolherRestUser;
    }

    public void setListaUsuarios(ArrayList<Usuario> listaUsuarios) {
        this.listaUsuarios = listaUsuarios;
    }

    public EscolherUserRestaurante(ArrayList <Usuario> listaUsuarios, ArrayList <Restaurante> listaRestaurante) {


        this.listaRestaurante = listaRestaurante;
        this.listaUsuarios = listaUsuarios;

        setTitle("Cadastro de restaurantes");
        setBounds(200, 100, 500, 500);
        setLayout(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setResizable(false);


        Font fonte = new Font("Arial", Font.BOLD, 24);

        System.out.println(nomebla);
        System.out.println(nomeUsuario);


        for(Usuario usuario : listaUsuarios){
            nomeUsuario.add(usuario.getNome());
        }
        for(Restaurante restaurante: listaRestaurante){
            nomeRestauante.add(restaurante.getNome());
        }

        campoNome = new JComboBox<Usuario>(new Vector<>(listaUsuarios));
        campoNome.setBounds(213, 190, 257, 43);
        campoNome.setBackground(new Color(52, 89, 68));
        campoNome.setBorder(BorderFactory.createMatteBorder(0, 0, 0, 0, Color.BLACK));
        campoNome.setForeground(Color.GREEN);
        campoNome.setFont(fonte);

        campoCnpj = new JComboBox<Restaurante>(new Vector<>(listaRestaurante));
        campoCnpj.setBounds(266, 333, 205, 43);
        campoCnpj.setBackground(new Color(52, 89, 68));
        campoCnpj.setBorder(BorderFactory.createMatteBorder(0, 0, 0, 0, Color.BLACK));
        campoCnpj.setForeground(Color.GREEN);
        campoCnpj.setFont(fonte);

        botaoEscolherRestUser = new JButton("Cadastrar");
        botaoEscolherRestUser.setBounds(267, 400, 215, 52);
        botaoEscolherRestUser.setBackground(Color.BLACK);

        botaoEscolherRestUser.setOpaque(false);
        botaoEscolherRestUser.setContentAreaFilled(false);
        botaoEscolherRestUser.setBorderPainted(false);

        JButton botaoVoltar = new JButton("Voltar");
        botaoVoltar.setBounds(35, 400, 215, 52);
        botaoVoltar.setBackground(Color.GRAY);


        botaoVoltar.setOpaque(false);
        botaoVoltar.setContentAreaFilled(false);
        botaoVoltar.setBorderPainted(false);


        ImageIcon imagem = new ImageIcon("telas_restaurante/escolher_user_restaurante.png");
        Image imagemRedimensionada = imagem.getImage().getScaledInstance(500, 490, Image.SCALE_DEFAULT);
        ImageIcon imagemFinal = new ImageIcon(imagemRedimensionada);
        JLabel labelImagem = new JLabel(imagemFinal);
        labelImagem.setBounds(0,  -20, 500, 500);
        getContentPane().add(labelImagem);


        botaoVoltar.addActionListener(e -> this.dispose());

        getContentPane().add(campoNome);
        getContentPane().add(campoCnpj);
        getContentPane().add(botaoEscolherRestUser);
        getContentPane().add(botaoVoltar);
        labelImagem.setVisible(true);
        System.out.println("lista é"+listaRestaurante);

    }

}
