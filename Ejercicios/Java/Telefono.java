public class Empresa
{
    //Atributos
    private LineaTelefonica linea1;
    private LineaTelefonica linea2;
    private LineaTelefonica linea3;

    public void inicializar()
    {
        numeroLlamadas = 0;
        numeroMinutos = 0;
        costoLlamadas = 0.0;
    }
    
    public double darCostoLlamadas()
    {
        return costoLlamadas;
    }

    public void agregarLlamadaLargaDistancia(int minutos)
    {
        numeroLlamadas++;
        numeroMinutos += minutos;
        costoLlamadas = costoLlamadas+(minutos*380);
    }
}