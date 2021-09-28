function seRompe() {
    return 3 +  z ;
}

try {
    seRompe();
} catch(err){
    console.error('Vaya, algo se ha roto...')
    console.error(err.message)
}

// function seRompeAsync(cb) {
//     setTimeout(() => {
//         try {
//             return 3 + z
//         } catch (error) {
//             cb(error);
//         }
//     })
// }

// try {
//     seRompeAsync((error) => console.error(error.message))
// } catch (error) {
//     console.error('Vaya, algo se ha roto...')
//     console.error(error.message)
// }