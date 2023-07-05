import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;
import java.util.Vector;
import java.awt.event.ItemListener;
import java.awt.event.ItemEvent;

public class EscolherUserRestaurante extends JFrame {

    public Vector<String> vetorCampoUSer = new Vector<>();
    public Vector<String> vetorCampoRes = new Vector<>();
    public static String escolhaUser;
    public static String escolhaRes;
    public JComboBox<String> campoUser;
    public JComboBox<String> campoRes;
    public JButton botaoEscolherRestUser;
    public static ArrayList<String> nomeUser = new ArrayList<>();
    public static ArrayList<String> nomeRes = new ArrayList<>();

    public void atualizarVetor(){
        vetorCampoUSer.clear();
        vetorCampoUSer.addAll(nomeUser);
        vetorCampoRes.clear();
        vetorCampoRes.addAll(nomeRes);
    }


    public EscolherUserRestaurante() {

        setTitle("Cadastro de restaurantes");
        setBounds(200, 100, 500, 500);
        setLayout(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setResizable(false);

        Font fonte = new Font("Arial", Font.BOLD, 24);

        campoUser = new JComboBox<String>(vetorCampoUSer);
        campoUser.setBounds(210, 200, 245, 35);
        campoUser.setFont(fonte);
        campoUser.addItemListener(new ItemListener() {
            public void itemStateChanged(ItemEvent e) {
                if(e.getStateChange() == ItemEvent.SELECTED) // para evitar duplicações
                    System.out.println("Você escolheu a opção: " + e.getItem());
                String teste = e.getItem().toString();
                escolhaUser = teste;
            }
        });

        campoRes = new JComboBox<String>(vetorCampoRes);
        campoRes.setBounds(210, 323, 245, 35);
        campoRes.setFont(fonte);
        campoRes.addItemListener(new ItemListener() {
            public void itemStateChanged(ItemEvent e) {
                if(e.getStateChange() == ItemEvent.SELECTED) // para evitar duplicações
                    System.out.println("Você escolheu a opção: " + e.getItem());
                String teste = e.getItem().toString();
                escolhaRes = teste;
            }
        });

        botaoEscolherRestUser = new JButton();
        botaoEscolherRestUser.setBounds(267, 400, 215, 52);
        botaoEscolherRestUser.setBackground(Color.BLACK);

        botaoEscolherRestUser.setOpaque(false);
        botaoEscolherRestUser.setContentAreaFilled(false);
        botaoEscolherRestUser.setBorderPainted(false);

        escolhaRes = String.valueOf(campoRes.getSelectedItem());



        JButton botaoVoltar = new JButton();
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



        botaoVoltar.addActionListener(e -> this.dispose());

        getContentPane().add(campoUser);
        getContentPane().add(campoRes);
        getContentPane().add(botaoEscolherRestUser);
        getContentPane().add(botaoVoltar);
        getContentPane().add(labelImagem);
        labelImagem.setVisible(true);

        this.setVisible(false);

    }

}
