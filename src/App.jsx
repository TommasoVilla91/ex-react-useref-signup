import { useState, useRef, useEffect } from "react"


function App() {

  const nameRef = useRef();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const specRef = useRef();
  const expRef = useRef();
  const [description, setDescription] = useState("")

  const specializations = ["Full Stack", "Frontend", "Backend"];
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~";

  ////// MILESTONE 2 correzione
  // non fare validazione nell'html nel return come creare funzione qui con useMemo
  // e inserire queste validazioni anche nell'if di handleSubmit
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const selectedSpec = specRef.current.value;
    const expYears = expRef.current.value;

    if(!name || !user || !password || !description) {
      alert("Tutti i campi devono essere compilati")
    } else if(expYears < 0 || isNaN(expYears)) {
      alert("Non si possono inserire numeri negativi");
    } else if(!selectedSpec) {
      alert("Seleziona una specializzazione")
    } else {
      console.log(`
        Nome: ${name}
        Username: ${user}
        Password: ${password}
        Specializzazione: ${selectedSpec}
        Anni esperienza: ${expYears}
        Descrizione: ${description}
      `)
    };    
  };
  
  const handleReset = () => {
    setUser("");
    setPassword("");
    setDescription("");
    nameRef.current.value = "";
    specRef.current.value = "";
    expRef.current.value = "";
  }
  
  useEffect(() => {
    nameRef.current.focus();
  }, [])

  return (
    <main>
      <section>
        <form onSubmit={handleSubmit}>

          <div className="col">
            <label htmlFor="">Nome completo</label>
            <input type="text" ref={nameRef}/>
          </div>

          <div className="col">
            <label htmlFor="">Username</label>
            <input 
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)} 
            />
            <p 
              className="validation"
              style={{color: user.length < 6 || [...symbols].some(char => user.includes(char)) ? "red" : "green"}}
            >
              {user.length < 6 || [...symbols].some(char => user.includes(char)) ? "Deve contenere solo caratteri alfanumerici e almeno 6 caratteri" : "così va bene"}
            </p>
          </div>

          <div className="col">
            <label htmlFor="">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
            <p 
              className="validation"
              style={{color: password.length >= 8 && [...password].some(char => (symbols && letters && numbers).includes(char)) ? "green" : "red"}}
            >
              {password.length >= 8 && [...password].some(char => (symbols && letters && numbers).includes(char)) ? "così va bene" : "Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo"}
            </p>
          </div>

          <div className="col">
            <label>Specializzazione</label>
            <select ref={specRef}>
              <option value="">Seleziona una specializzazione</option>
              {specializations.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="col">
            <label htmlFor="">Anni di esperienza</label>
            <input type="number"ref={expRef}/>
          </div>

          <div className="col">
            <label htmlFor="">Breve descrizione</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <p 
              className="validation" 
              style={{color: (description.trim()).length >= 100 && (description.trim()).length <= 1000 ? "green" : "red"}}
            >
              {(description.trim()).length >= 100 && (description.trim()).length <= 1000 ? "così va bene" : "Deve contenere tra 100 e 1000 caratteri"}
            </p>
          </div>

          <div className="col">
            <button type="submit">Invia</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </form>              
      </section>

      {/* ///// BONUS correzione ultimo punto */}
      <div>
        <button className="top-teleport" onClick={() => nameRef.current.scrollIntoView({behavior: "smooth"})}>Torna su</button>
      </div>
      <div className="spacer"></div>
    </main>
  )
}

export default App
