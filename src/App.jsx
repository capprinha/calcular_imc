import { useState } from 'react'
import pesoLogo from './assets/regua.svg'
import alturaLogo from './assets/circulo-de-seta-para-cima.svg'
import Resultado from './components/Resultado'

function App() {
  
  const [ peso, setPeso ] = useState(0)
  const [ altura ,setAltura] = useState(0)

  const alturaFloat = parseFloat(altura)
  const pesoFloat = parseFloat(peso)

  function fazerIMC(){
    const alturaAoQuadrado = alturaFloat * alturaFloat
    const imc = pesoFloat / alturaAoQuadrado
    
    if( alturaFloat == 0 && pesoFloat == 0){
        return 'Digite seu peso e altura'
    }
    else if(alturaFloat > 1 && pesoFloat >1){
        return imc.toFixed(2)
    }
    
    
}

function vericarIMC(){
    const imc = fazerIMC()

    if(imc <= 18.50){
        return 'Abaixo do peso'
    }
    else if( imc >= 18.51 && imc <= 24.99){
        return 'Peso normal'
    }
    else if(imc >= 25.0 && imc <= 29.99){
        return 'Sobrepeso'
    }
    else if(imc >= 30.0 && imc <= 34.99){
        return 'Obessidade grau 1'
    }
    else if(imc >= 35.0 && imc <= 39.99){
        return 'Obessidade grau 2'
    }
    else if(imc >= 40.0){
        return 'Obessidade grau 3'
    }else{
      return 'Numeros invalidos'
    }
}

  const imc = fazerIMC()
  const resultadoDoIMC = vericarIMC()
  return (
    <>
      <h1 className='logo'>Calcular IMC</h1>
      <div className='form container'>
        <img className='formLogo' src={pesoLogo} alt="Balança" />
        <input className='formInput' type="number" placeholder='Digite seu peso'
        onBlur={evento => setPeso(evento.target.value)} />
        <img className='formLogo' src={alturaLogo} alt="Regua" />
        <input className='formInput' type="number" placeholder='Digite sua altura'
        onBlur={evento => setAltura(evento.target.value)} />
      </div>
      <Resultado imc={imc} resultado={resultadoDoIMC}/>
    </>
  )

  
}

export default App
