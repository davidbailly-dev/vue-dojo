export async function getTasks() {
    const response = await fetch('http://localhost:3001/tasks')

    if (!response.ok) {
        throw new Error('Erreur serveur : impossible de récupérer les tâches')
    }

    let jsonResponse = await response.json() 
    let sanitizedResponse = jsonResponse.map(task => {
        const sanitizedTask = {
            ...task,
            id: parseInt(task.id)
        }
        
        return sanitizedTask
    })

    return sanitizedResponse
}