export default function Footer(){
  const currentYear = new Date().getFullYear()
  const gitHubUrl= "https://github.com/kevindietme"
  return (
    <footer className="flex flex-col items-center">
  <p className="text-slate-100">&copy;{currentYear}</p>
  <p><a href={gitHubUrl} target="_blank" rel="noreferrer" className="text-slate-100">See Code in GitHub</a></p>
</footer>

  )
}