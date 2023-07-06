import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Vector;

public class FazerPedido extends JFrame {
    public JTextField campoNomeLanche;
    public JTextField campoPreco;
    public JButton botaoCriarLanche;

    // para iniciar array com valores, utilizar: Arrays.asList()
    // exemplo: public ArrayList<Lanche> lanche = new ArrayList<>(Arrays.asList());


//    public static ArrayList<String> nomeLanche = new ArrayList<>();
//    public static ArrayList<Integer> precoLanches = new ArrayList<>();

    public FazerPedido() {
        setTitle("Fazer Pedidos");
        setBounds(200, 100, 500, 500);
        setLayout(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setResizable(false);

        Font fonte = new Font("Arial", Font.BOLD, 24);


        campoNomeLanche = new JTextField();
        campoNomeLanche.setBounds(213, 190, 257, 43);
        campoNomeLanche.setBackground(new Color(52, 89, 68));
        campoNomeLanche.setBorder(BorderFactory.createMatteBorder(0, 0, 0, 0, Color.BLACK));
        campoNomeLanche.setForeground(Color.GREEN);
        campoNomeLanche.setFont(fonte);

        campoPreco = new JTextField();
        campoPreco.setBounds(213, 261, 257, 43);
        campoPreco.setBackground(new Color(52, 89, 68));
        campoPreco.setBorder(BorderFactory.createMatteBorder(0, 0, 0, 0, Color.BLACK));
        campoPreco.setForeground(Color.GREEN);
        campoPreco.setFont(fonte);


        System.out.println(campoPreco.getText());



        botaoCriarLanche = new JButton("Cadastrar Lanche");
        botaoCriarLanche.setBounds(260, 400, 215, 52);
        botaoCriarLanche.setBackground(Color.WHITE);

//        botaoRealizaPedido.setOpaque(false);
//        botaoRealizaPedido.setContentAreaFilled(false);
//        botaoRealizaPedido.setBorderPainted(false);


        JButton botaoVoltar = new JButton("Voltar");
        botaoVoltar.setBounds(15, 400, 215, 52);
        botaoVoltar.setBackground(Color.WHITE);


//        botaoVoltar.setOpaque(false);
//        botaoVoltar.setContentAreaFilled(false);
//        botaoVoltar.setBorderPainted(false);
        botaoVoltar.addActionListener(e -> this.dispose());


        ImageIcon imagem = new ImageIcon("telas_restaurante/cadastrar_produto.png");
        Image imagemRedimensionada = imagem.getImage().getScaledInstance(500, 490, Image.SCALE_DEFAULT);
        ImageIcon imagemFinal = new ImageIcon(imagemRedimensionada);
        JLabel labelImagem = new JLabel(imagemFinal);
        labelImagem.setBounds(0,  -20, 500, 500);

        getContentPane().add(campoNomeLanche);
        getContentPane().add(campoPreco);
        getContentPane().add(botaoCriarLanche);
        getContentPane().add(botaoVoltar);
        getContentPane().add(labelImagem);

        this.setVisible(false);

    }

}
