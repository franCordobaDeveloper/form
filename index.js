// Obtén las referencias a los elementos select
var countrySelect = document.getElementById('pais');
var provinceSelect = document.getElementById('provincia');


// Define un objeto que mapea los países con las provincias correspondientes
var provincesByCountry = {
   
    argentina: [
        'Buenos Aires',
        'Catamarca',
        'Chaco',
        'Chubut',
        'Córdoba',
        'Corrientes',
        'Entre Ríos',
        'Formosa',
        'Jujuy',
        'La Pampa',
        'La Rioja',
        'Mendoza',
        'Misiones',
        'Neuquén',
        'Río Negro',
        'Salta',
        'San Juan',
        'San Luis',
        'Santa Cruz',
        'Santa Fe',
        'Santiago del Estero',
        'Tierra del Fuego',
        'Tucumán'
    ],

    chile: [
        'Arica y Parinacota',
        'Tarapacá',
        'Antofagasta',
        'Atacama',
        'Coquimbo',
        'Valparaíso',
        'Región Metropolitana de Santiago',
        'Libertador General Bernardo O\'Higgins',
        'Maule',
        'Ñuble',
        'Biobío',
        'La Araucanía',
        'Los Ríos',
        'Los Lagos',
        'Aysén del General Carlos Ibáñez del Campo',
        'Magallanes y de la Antártica Chilena'
    ],

    uruguay: [
        'Artigas',
        'Canelones',
        'Cerro Largo',
        'Colonia',
        'Durazno',
        'Flores',
        'Florida',
        'Lavalleja',
        'Maldonado',
        'Montevideo',
        'Paysandú',
        'Río Negro',
        'Rivera',
        'Rocha',
        'Salto',
        'San José',
        'Soriano',
        'Tacuarembó',
        'Treinta y Tres'
    ],

    mexico: [
        'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Coahuila',
        'Colima',
        'Durango',
        'Estado de México',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas'
      ],

}

// Función para actualizar las opciones de provincia según el país seleccionado
function updateProvinceOptions() {
    // Obtén el valor seleccionado del país
    var selectedCountry = countrySelect.value;
  
    // Limpia las opciones actuales del select de provincia
    provinceSelect.innerHTML = '';
  
    // Agrega una opción por defecto
    var defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.text = 'Seleccione una provincia';
    provinceSelect.appendChild(defaultOption);
  
    // Si se seleccionó un país, agrega las opciones de provincia correspondientes
    if (selectedCountry) {
      var provinces = provincesByCountry[selectedCountry];
      provinces.forEach(function(provincia) {
        var option = document.createElement('option');
        option.value = provincia;
        option.text = provincia;
        provinceSelect.appendChild(option);
      });
    }
  }
  
  // Escucha el evento change del select de país y actualiza las opciones de provincia
  countrySelect.addEventListener('change', updateProvinceOptions);
  
  // Llama a la función inicialmente para que las opciones se carguen según el país seleccionado (si hay alguno)
  updateProvinceOptions();