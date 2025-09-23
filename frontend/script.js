const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const toggleSidebarBtn = document.getElementById('toggleSidebar');

toggleSidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  
  // Ajuste dinámico opcional
  if (sidebar.classList.contains('collapsed')) {
    mainContent.style.marginLeft = '60px';
    mainContent.style.width = 'calc(100% - 60px)';
  } else {
    mainContent.style.marginLeft = '250px';
    mainContent.style.width = 'calc(100% - 250px)';
  }
});

document.getElementById('canvasForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const data = {
    teamName: document.getElementById('teamName')?.value || "",
    who: document.getElementById('who').value,
    purpose: document.getElementById('purpose').value,
    values: document.getElementById('values').value,
    alwaysDo: document.getElementById('alwaysDo').value,
    neverDo: document.getElementById('neverDo').value,
    decisionMaking: document.getElementById('decisionMaking').value,
    ruleBreak: document.getElementById('ruleBreak').value,
    raiseIssues: document.getElementById('raiseIssues').value,
    strengths: document.getElementById('strengths').value,
    weaknesses: document.getElementById('weaknesses').value,
    sprintBacklog: "",
    increment: "",
    boundaries: "",
    scrumOther: ""
  };

  const response = await fetch('http://localhost:8000/guardar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  alert(result.mensaje || "Enviado");
});
