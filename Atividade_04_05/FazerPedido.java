import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;
import java.util.Vector;

public class FazerPedido extends JFrame {

    public JButton botaoRealizaPedido;
    public static ArrayList<Lanche> lanche = new ArrayList<>();
    public static ArrayList<String> nomeLanche = new ArrayList<>();
    public static ArrayList<Integer> precoLanches = new ArrayList<>();

    public FazerPedido() {
        setTitle("Fazer Pedidos");
        setBounds(200, 100, 500, 500);
        setLayout(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setResizable(false);

        Font fonte = new Font("Arial", Font.BOLD, 24);

        Lanche fileDeReal = new Lanche();


        JTextArea campoNome = new JTextArea();
        campoNome.setBounds(213, 190, 257, 43);
        campoNome.setBackground(new Color(52, 89, 68));
        campoNome.setBorder(BorderFactory.createMatteBorder(0, 0, 0, 0, Color.BLACK));
        campoNome.setForeground(Color.GREEN);
        campoNome.setFont(fonte);


        botaoRealizaPedido = new JButton();
        botaoRealizaPedido.setBounds(267, 400, 215, 52);
        botaoRealizaPedido.setBackground(Color.BLACK);

        botaoRealizaPedido.setOpaque(false);
        botaoRealizaPedido.setContentAreaFilled(false);
        botaoRealizaPedido.setBorderPainted(false);
        botaoRealizaPedido.addActionListener(e -> {

        });

        JButton botaoVoltar = new JButton();
        botaoVoltar.setBounds(35, 400, 215, 52);
        botaoVoltar.setBackground(Color.GRAY);


        botaoVoltar.setOpaque(false);
        botaoVoltar.setContentAreaFilled(false);
        botaoVoltar.setBorderPainted(false);
        botaoVoltar.addActionListener(e -> this.dispose());


        ImageIcon imagem = new ImageIcon("telas_restaurante/escolher_user_restaurante.png");
        Image imagemRedimensionada = imagem.getImage().getScaledInstance(500, 490, Image.SCALE_DEFAULT);
        ImageIcon imagemFinal = new ImageIcon(imagemRedimensionada);
        JLabel labelImagem = new JLabel(imagemFinal);
        labelImagem.setBounds(0,  -20, 500, 500);


        getContentPane().add(botaoRealizaPedido);
        getContentPane().add(botaoVoltar);
//        getContentPane().add(labelImagem);

        this.setVisible(false);

    }

}
