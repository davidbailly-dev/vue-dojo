export async function getTasks() {
    const response = await fetch('http://localhost:3001/tasks')

    if (!response.ok) {
        throw new Error('Erreur serveur : impossible de récupérer les tâches')
    }

    return await response.json()
}