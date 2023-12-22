import { styled, keyframes } from 'styled-components';

const shakeAnimation = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
  25% { transform: translate(-50%, -50%) rotate(-5deg) scale(1); }
  50% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
  75% { transform: translate(-50%, -50%) rotate(5deg) scale(1); }
  100% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
`

const LightEffect = styled.div`
    position: absolute;
    width: 200px; /* Ajuste o tamanho conforme necessário */
    height: 200px; /* Ajuste o tamanho conforme necessário */
    background: radial-gradient(circle, rgba(92, 116, 242, 0.1) 10%, rgba(0, 0, 0, 0) 60%);
    border-radius: 50%; /* Reduzindo ainda mais o border-radius para uma forma mais irregular */
    pointer-events: none;
    z-index: 1;
    animation: ${shakeAnimation} 2s infinite; /* Adicionando a animação de balanço */
    transition: top 0.1s ease, left 0.1s ease;
`

export default LightEffect;