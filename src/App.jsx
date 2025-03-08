import WhyUseState from "./topics/01-useState/01-why-useState";
import UseStateExample from "./topics/01-useState/02-useStateExample";
import useEffectBasicks from "./basic/useEffect-basicks";
import UseStateObject from "./topics/01-useState/04-useState-object";
import CodeExample from "./topics/02-useEffect/01-code-example";
import UseStateArray from "./topics/01-useState/03-useState-Array";
import UseEffectBasics from "./topics/02-useEffect/02-useEffect-backs";
import MultipleUseEffect from "./topics/02-useEffect/03-multiple-useEffect";
import UseEffectFetch from "./topics/02-useEffect/04-useEffect-fetch";
import MultipleReturns from "./topics/03-conditional-rendering/01-multiple-returns";
import MultipleReturnsFetch from "./topics/03-conditional-rendering/02-multiple-returns-fetch";
import HooksRules from "./topics/03-conditional-rendering/03-hooks-rule";
import ShorCircuit from "./topics/03-conditional-rendering/04-short-circuit";
import ShorCircuitExample from "./topics/03-conditional-rendering/05-short-circuit-example";
import ToggleChallenge from "./topics/03-conditional-rendering/06-toggle-challenge";

import UserChallenge from "./topics/03-conditional-rendering/07-use-challenge";
import ControllerInput from "./topics/04-forms/01-controller-input";
import MultipleInputs from "./topics/04-forms/03-multiple-input";
import OtherInputs from "./topics/04-forms/04-other-input";
import UnControlInput from "./topics/04-forms/05-form-data";

function App(){

  return (
    <main className="bg-neutral-800 text-neutral-100">
      <div className="container mx-auto py-8 px-4 min-h-screen">
        <h1 className="text-4xl font-bold mb-6 text-cyan-400">React Advance</h1>
        {/* <WhyUseState/> */}
        {/* <UseStateExample/> */}
        {/* <UseStateArray/> */}
        {/* <UseStateObject/> */}
        {/* <CodeExample/> */}
        
        {/* <useEffectBasicks/> */}
        {/* <UseEffectBasics/> */}
        {/* <MultipleUseEffect/> */}
        {/* <UseEffectFetch/> */}
        {/* <MultipleReturns/> */}
        {/* <MultipleReturnsFetch/>    */}
        {/* <HooksRules/> */}
        {/* <ShorCircuit/> */}
        {/* <ShorCircuitExample/> */}
        {/* <ToggleChallenge/> */}
        {/* <UserChallenge/> */}
        {/* <ControllerInput/> */}

        {/* <MultipleInputs/> */}
        {/* <OtherInputs/> */}
        <UnControlInput/>
        
      </div>
      
    </main> 
  ) 
}
export default App;