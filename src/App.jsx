import { useState, useRef } from "react"


function App() {

  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [selectedSpec, setSelectedSpec] = useState("");
  const [expYears, setExpYears] = useState("");
  const [description, setDescription] = useState("");

  const specializations = ["Full Stack", "Frontend", "Backend"];
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~";

  const handleSubmit = (e) => {
    e.preventDefault();
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

  return (
    <main>
      <section>
        <form onSubmit={handleSubmit}>

          <div className="col">
            <label htmlFor="">Nome completo</label>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
              {user.length < 6 || [...symbols].some(char => user.includes(char)) ? "Username deve contenere solo caratteri alfanumerici e almeno 6 caratteri" : "così va bene"}
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
            <select value={selectedSpec} onChange={(e) => setSelectedSpec(e.target.value)}>
              <option value="">Seleziona una specializzazione</option>
              {specializations.map((s, i) => (
                <option 
                  key={i} 
                  value={s}
                >
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="col">
            <label htmlFor="">Anni di esperienza</label>
            <input 
              type="number"
              value={expYears}
              onChange={(e) => setExpYears(e.target.value)} 
            />
          </div>

          <div className="col">
            <label htmlFor="">Breve descrizione</label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            >
            </textarea>
            <p 
              className="validation" 
              style={{color: (description.trim()).length >= 100 && (description.trim()).length <= 1000 ? "green" : "red"}}
            >
              {(description.trim()).length >= 100 && (description.trim()).length <= 1000 ? "così va bene" : "Deve contenere tra 100 e 1000 caratteri"}
            </p>
          </div>

          <div className="col">
            <button type="submit">Invia</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default App
