async function getImage(name:string|undefined) {
    let imageModule;
    try {      
      imageModule = await import(`@assets/img/${name}`);
    } catch (err) {
      console.error(`No se pudo importar la imagen ${name}:`, err);
    }
    return imageModule?.default;
  }

export default getImage;
