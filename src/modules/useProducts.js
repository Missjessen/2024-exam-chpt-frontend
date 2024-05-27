import { db } from '../firebase.js'

import { ref } from 'vue'
import { collection, onSnapshot, doc, deleteDoc, addDoc, updateDoc } from 'firebase/firestore';

const useProducts = () => {

  const products = ref([]); // to store data from firebase
  const productDataRef = collection(db, 'products');

  const AddProductData = ref({
    productName: '',
    productPrice: ''
  })

  const UpdateProductData = ref({
    productName: '',
    productPrice: ''
  })

  const getProductsData = () => {
    onSnapshot(productDataRef, (snapshot) => {
      products.value = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
          //productName: doc.data().productName,
          //productPrice: doc.data().productPrice
        }
      })
    })
    console.log("test", products)
  }

  const firebaseDeleteSingleItem = async(id) => {
    await deleteDoc(doc(db, "products", id));
    console.log("is deleted", id)
  }

  const firebaseAddSingleItem = async() => {
    await addDoc(collection(db, "products"),
      {
        productName: AddProductData.value.productName,
        productPrice: 100
      }
    ).then({
    });
      
    console.log("is added") 

  }

  const firebaseUpdateSingleItem = async(product) => { 
    await updateDoc(doc(productDataRef, product), {
        productName: products.value.find(product => product.id === product.id).productName, 
     // productName: UpdateProductData.value.productName, 
     // productPrice: 200
    }).then(() => {
     // UpdateProductData.value.productName = ''
    })
  }

  return {
    getProductsData,
    products,
    firebaseDeleteSingleItem,
    firebaseAddSingleItem,
    AddProductData,
    firebaseUpdateSingleItem,
    UpdateProductData
  }
 }

  export default useProducts;