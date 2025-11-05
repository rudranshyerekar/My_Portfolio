export default function Header(){
  return (
    <header className="container" style={{padding:'16px 0', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <a href="/"><strong>Rudransh Yerekar</strong></a>
      <nav style={{display:'flex', gap:16}}>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
