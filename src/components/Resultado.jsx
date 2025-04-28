import styles from './Resultado.module.css'

function Resultado({ imc, resultado }){

    

    return(
        <div className="container">
            <div className={styles.resultado}>
            <h2 className={styles.resultadoNumero}>{imc}</h2>
            <h2 className={styles.resultadoNumero}>{resultado}</h2>
            {resultado == 'Abaixo do peso' ? <p className={styles.resultadoTexto}>
                Um IMC abaixo de 18.5 indica baixo peso. Essencialmente, pode ser um alerta para desnutrição ou outras condiçõe de saúde.
                Baixo peso requer avaliação médica, pois afeta o sistema imunológico.
            </p> : resultado == ''}
            {resultado == 'Peso normal' ? <p className={styles.resultadoTexto}>
                IMC entre 18.5 e 24.5 é considerado normal. Estar nesta faixa de peso sugere um equilíbrio saudável entre peso e altura, diminuindoo risco de doenças.
                Manter-se nesta categoria envolve dieta equilibrada e atividade fisica.
            </p> : resultado == ''}
            {resultado == 'Sobrepeso' ? <p className={styles.resultadoTexto}>
                Valores de IMC entre 25 e 29.0 apontam sobrepeso. Embora não classificado como obessidade, já manifesta um risco aumentado de doenças cardiovasculares e diabetes.
                Buscar orientação para redução de peso é prudente. 
            </p> : resultado == ''}
            {resultado == 'Obessidade grau 1' || resultado == 'Obessidade grau 2' || resultado == 'Obessidade grau 3' ? <p className={styles.resultadoTexto}>
                IMC maior que 30 classfica obessidade. Divide-se em 3 graus
                <ul className={styles.resultadoList}>
                    <li>
                        <b>Grau 1 ( 30 - 34.9 )</b>
                        <p className={styles.resultadoTexto}>Risco moderado de diabeste tipo 2</p>
                    </li>
                    <li>
                        <b>Grau 2 ( 35 - 39.9 )</b>
                        <p className={styles.resultadoTexto}>Aumento complicações cardíacas</p>
                    </li>
                    <li>
                        <b>Grau 3 ( 40+ )</b>
                        <p className={styles.resultadoTexto}>Elevado risco de comorbidades graves</p>
                    </li>
                </ul>
            </p> : resultado == ''}
            
            </div>
        </div>
    )
}


export default Resultado
