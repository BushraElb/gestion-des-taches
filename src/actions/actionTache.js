export const ajouterTache = (tache) => ({
    type: 'AJOUTER_TACHE',
    payload: tache
  })
  
  export const supprimerTache = (id) => ({
    type: 'SUPPRIMER_TACHE',
    payload: id
  })
  
  export const toggleTache = (id) => ({
    type: 'TOGGLE_TASK',
    payload: id
  })