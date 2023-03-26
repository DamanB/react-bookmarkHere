import { firestore, fireauth } from './firebase/config'

// Export services to project
export {
    firestore as db,
    fireauth as auth,
}