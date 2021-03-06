// import firebase main app instance.
import firebase from 'firebase/app'
// make sure firebase auth is present on the bundle.
import 'firebase/auth'
// make sure firebase firestore is present on the bundle.
import 'firebase/firestore'
// make sure firebase firestore is present on the bundle.
import 'firebase/storage'
// make sure firebase cloud functions is present on the bundle.
import 'firebase/functions'
// import the configuration builder for firebase.
import config from './config'
// import the authentication configurator.
import configureAuth from './auth'
// import the firebase configurator.
import configureFirestore from './firestore'
// import storage configuration.
import configureStorage from './storage'

/**
 * Firebase plugin.
 *
 * @param store
 * @param Vue
 */
export default ({ store, Vue }) => {
  // initialize firebase with the previously built configuration.
  const firebaseApp = firebase.initializeApp(config)
  // set on vue prototype.
  Vue.prototype.firebase = firebaseApp
  // configure authentication.
  configureAuth(firebaseApp, store)

  // configure firestore.
  configureFirestore(firebaseApp, Vue)

  // configure storage.
  configureStorage(firebaseApp, Vue)
}
