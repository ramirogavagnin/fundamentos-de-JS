let sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
}

let alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
}

let martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
}

let dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
}

let vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
}

let paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
}

let personas = [sacha, alan, martin, dario, vicky, paula]
const data = [
    {
        url: 'http://112f0757.ngrok.io/api/v1/surveys/7/',
        pk: 7,
        valid_since: '2019-07-03T12:39:37Z',
        valid_until: '2019-07-31T12:39:39Z',
        locked: false,
        answers_percent: 0.0,
        pass_percent: 11.11111111111111,
        missing_answers: 7,
        author_role: 'auditor',
        version: '0001_000006_2019-07-03T12:39:12',
        program: {
            name: 'Programa Rumbo 2019',
            last_updated: '2019-07-12T23:29:58.127189Z',
            published: false,
            editable: true,
            country: 'AR',
            areas: [
                {
                    pk: 21,
                    name: 'Area general',
                    description:
                        'Esta es el área que se debe mostrar inicialmente y si sus lineamientos no está todos aprobados no se debe poder continuar con el resto del programa.',
                    color: '#996633',
                    logo: 'http://112f0757.ngrok.io/media/uploads/area_logo/network-wireless.png',
                    approved: false,
                    required_points: 42,
                    missing_answers: 4,
                    attachments_count: 0,
                    essential: true,
                    modules: [
                        {
                            pk: 19,
                            name: 'General',
                            description: '',
                            color: '#000000',
                            logo: 'http://112f0757.ngrok.io/media/uploads/area_logo/yakuake.png',
                            required_points: 0,
                            approved: false,
                            missing_answers: 4,
                            attachments_count: 0,
                            guidelines: [
                                {
                                    pk: 20,
                                    code: 'general-1',
                                    name:
                                        'El nombre del lineamiento puede tener hasta 128 caracteres, casi un twit',
                                    description:
                                        'La descripción del lineamiento puede tener una gran cantidad de texto.\r\nLa descripción del lineamiento puede tener una gran cantidad de texto.\r\nLa descripción del lineamiento puede tener una gran cantidad de texto.\r\nLa descripción del lineamiento puede tener una gran cantidad de texto.\r\nLa descripción del lineamiento puede tener una gran cantidad de texto.\r\nLa descripción del lineamiento puede tener una gran cantidad de texto.\r\nLa descripción del lineamiento puede tener una gran cantidad de texto.\r\nLa descripción del lineamiento puede tener una gran cantidad de texto.\r\nLa descripción del lineamiento puede tener una gran cantidad de texto.',
                                    required: true,
                                    answer_type: 'b',
                                    value_min: null,
                                    value_max: null,
                                    position: 100,
                                    approved: null,
                                    given_points: 0,
                                    answers: [],
                                    attachments: [],
                                    evaluation_lines: [],
                                },
                                {
                                    pk: 21,
                                    code: 'general-2',
                                    name: 'Otro nombre de lineamiento un poco más corto',
                                    description: 'Con una descripción breve',
                                    required: true,
                                    answer_type: 'b',
                                    value_min: null,
                                    value_max: null,
                                    position: 100,
                                    approved: null,
                                    given_points: 0,
                                    answers: [],
                                    attachments: [],
                                    evaluation_lines: [],
                                },
                                {
                                    pk: 22,
                                    code: 'general-3',
                                    name: 'Lineamiento 3',
                                    description: '',
                                    required: true,
                                    answer_type: 'b',
                                    value_min: null,
                                    value_max: null,
                                    position: 100,
                                    approved: null,
                                    given_points: 0,
                                    answers: [],
                                    attachments: [],
                                    evaluation_lines: [],
                                },
                                {
                                    pk: 23,
                                    code: 'general-4',
                                    name:
                                        'Cantidad de respuestas ingresadas en la encuesta anterior',
                                    description: '',
                                    required: true,
                                    answer_type: 'n',
                                    value_min: '0.00',
                                    value_max: '10.00',
                                    position: 110,
                                    approved: null,
                                    given_points: 0,
                                    answers: [],
                                    attachments: [],
                                    evaluation_lines: [
                                        {
                                            min_value: '5.00',
                                            given_points: '5.00',
                                            approved: false,
                                            base_points: false,
                                        },
                                        {
                                            min_value: '10.00',
                                            given_points: '10.00',
                                            approved: true,
                                            base_points: true,
                                        },
                                    ],
                                },
                                {
                                    pk: 24,
                                    code: 'general-5',
                                    name: 'Porcentaje de envios en el mes',
                                    description:
                                        'Porcentaje de envios realizados durante el mes en curso',
                                    required: false,
                                    answer_type: 'p',
                                    value_min: '0.00',
                                    value_max: '100.00',
                                    position: 120,
                                    approved: null,
                                    given_points: 0,
                                    answers: [],
                                    attachments: [],
                                    evaluation_lines: [
                                        {
                                            min_value: '50.00',
                                            given_points: '5.00',
                                            approved: false,
                                            base_points: false,
                                        },
                                        {
                                            min_value: '75.00',
                                            given_points: '7.00',
                                            approved: false,
                                            base_points: false,
                                        },
                                        {
                                            min_value: '90.00',
                                            given_points: '9.00',
                                            approved: true,
                                            base_points: false,
                                        },
                                        {
                                            min_value: '100.00',
                                            given_points: '10.00',
                                            approved: true,
                                            base_points: true,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    pk: 2,
                    name: 'Area Finanzas',
                    description: 'Finanzas',
                    color: '#4ae39b',
                    logo:
                        'http://112f0757.ngrok.io/media/uploads/area_logo/applications-engineering_HvGCxoj.png',
                    approved: false,
                    required_points: 21,
                    missing_answers: 1,
                    attachments_count: 0,
                    essential: false,
                    modules: [
                        {
                            pk: 3,
                            name: 'Módulo ingresos',
                            description: 'Ingresos de las finanzas',
                            color: '#a1a1a1',
                            logo: 'http://112f0757.ngrok.io/media/uploads/area_logo/showfoto.png',
                            required_points: 2,
                            approved: true,
                            missing_answers: 0,
                            attachments_count: 0,
                            guidelines: [
                                {
                                    pk: 15,
                                    code: 'a0m0l0',
                                    name:
                                        'eeeVariacion Variacion de ingresos, Variacion de ingresos, Variacion de ingresos',
                                    description:
                                        'Variación de ingresos en realación al último período',
                                    required: true,
                                    answer_type: 'p',
                                    value_min: null,
                                    value_max: null,
                                    position: 100,
                                    approved: true,
                                    given_points: 20.0,
                                    answers: [
                                        {
                                            survey: 7,
                                            guideline: 15,
                                            value: '1122',
                                            edited: false,
                                            approved: false,
                                            sent_by: 'facundo',
                                        },
                                    ],
                                    attachments: [],
                                    evaluation_lines: [
                                        {
                                            min_value: '10.00',
                                            given_points: '10.00',
                                            approved: false,
                                            base_points: false,
                                        },
                                        {
                                            min_value: '20.00',
                                            given_points: '20.00',
                                            approved: true,
                                            base_points: false,
                                        },
                                    ],
                                },
                                {
                                    pk: 19,
                                    code: 'a0m0l1',
                                    name: 'Aumento de ingresos',
                                    description:
                                        'Responda si los ingresos fueron superiores a los reportados durante el último período',
                                    required: false,
                                    answer_type: 'b',
                                    value_min: null,
                                    value_max: null,
                                    position: 100,
                                    approved: null,
                                    given_points: 0,
                                    answers: [],
                                    attachments: [],
                                    evaluation_lines: [],
                                },
                            ],
                        },
                        {
                            pk: 4,
                            name: 'Módulo particular',
                            description:
                                'El alcance del balance actual. El alcance del balance actual. El alcance del balance actual. El alcance del balance actual. El alcance del balance actual. El alcance del balance actual. El alcance del balance actual.',
                            color: '#373737',
                            logo: 'http://112f0757.ngrok.io/media/uploads/area_logo/timevault.png',
                            required_points: 0,
                            approved: false,
                            missing_answers: 1,
                            attachments_count: 0,
                            guidelines: [
                                {
                                    pk: 12,
                                    code: 'a0m4l0',
                                    name: 'Permanencia en programa',
                                    description: 'Cantidad de años de permanencia en el programa',
                                    required: true,
                                    answer_type: 'p',
                                    value_min: null,
                                    value_max: null,
                                    position: 100,
                                    approved: null,
                                    given_points: 0,
                                    answers: [],
                                    attachments: [],
                                    evaluation_lines: [],
                                },
                                {
                                    pk: 7,
                                    code: 'a0m4l1',
                                    name: 'Tiempo de respuesta',
                                    description:
                                        'La descripción es un texto que explica de que se trata el lineamiento.\r\nPuede incluir detalles sobre como se debe cumplir, recomendaciones para facilitar su aprobación y comentarios sobre las desventajas de no cumplirlo.',
                                    required: false,
                                    answer_type: 'n',
                                    value_min: null,
                                    value_max: null,
                                    position: 100,
                                    approved: null,
                                    given_points: 0,
                                    answers: [],
                                    attachments: [],
                                    evaluation_lines: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    pk: 1,
                    name: 'Área Aministración',
                    description:
                        'Este area incluye los lineamientos aplicables a la administración de los distribuidores.',
                    color: '#48e39a',
                    logo: 'http://112f0757.ngrok.io/media/uploads/area_logo/preferences-system.png',
                    approved: false,
                    required_points: 0,
                    missing_answers: 3,
                    attachments_count: 0,
                    essential: false,
                    modules: [
                        {
                            pk: 8,
                            name: 'Entradas',
                            description: 'Las entradas de este area',
                            color: '#478fd6',
                            logo:
                                'http://112f0757.ngrok.io/media/uploads/area_logo/abstract_256x256_30_7YX8RJY.jpg',
                            required_points: 0,
                            approved: true,
                            missing_answers: 0,
                            attachments_count: 0,
                            guidelines: [
                                {
                                    pk: 5,
                                    code: 'eee333',
                                    name: 'e',
                                    description: 'eee333eee333',
                                    required: false,
                                    answer_type: 'n',
                                    value_min: null,
                                    value_max: null,
                                    position: 100,
                                    approved: null,
                                    given_points: 0,
                                    answers: [],
                                    attachments: [],
                                    evaluation_lines: [],
                                },
                            ],
                        },
                        {
                            pk: 1,
                            name: 'Estimaciones',
                            description: 'El modulo 1',
                            color: '#990099',
                            logo:
                                'http://112f0757.ngrok.io/media/uploads/area_logo/abstract_256x256_17.jpg',
                            required_points: 0,
                            approved: false,
                            missing_answers: 3,
                            attachments_count: 0,
                            guidelines: [
                                {
                                    pk: 1,
                                    code: 'a-m1-g1',
                                    name: 'guia 1',
                                    description: 'Guia requerida 1',
                                    required: true,
                                    answer_type: 'b',
                                    value_min: null,
                                    value_max: null,
                                    position: 100,
                                    approved: null,
                                    given_points: 0,
                                    answers: [],
                                    attachments: [],
                                    evaluation_lines: [],
                                },
                                {
                                    pk: 4,
                                    code: 'a-m1-g23',
                                    name: 'Guia 23',
                                    description: 'Una guia nueva',
                                    required: true,
                                    answer_type: 'b',
                                    value_min: null,
                                    value_max: null,
                                    position: 100,
                                    approved: null,
                                    given_points: 0,
                                    answers: [],
                                    attachments: [],
                                    evaluation_lines: [],
                                },
                                {
                                    pk: 3,
                                    code: 'a-m1-g3',
                                    name: 'guia 3',
                                    description: 'Guia 3',
                                    required: true,
                                    answer_type: 'p',
                                    value_min: null,
                                    value_max: null,
                                    position: 100,
                                    approved: null,
                                    given_points: 0,
                                    answers: [],
                                    attachments: [],
                                    evaluation_lines: [],
                                },
                                {
                                    pk: 2,
                                    code: 'a-m1-g2',
                                    name: 'guia 2',
                                    description: 'Guia opcional 2',
                                    required: false,
                                    answer_type: 'n',
                                    value_min: null,
                                    value_max: null,
                                    position: 100,
                                    approved: null,
                                    given_points: 0,
                                    answers: [],
                                    attachments: [],
                                    evaluation_lines: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    pk: 3,
                    name: 'Area Compras',
                    description: '',
                    color: 'blue',
                    logo:
                        'http://112f0757.ngrok.io/media/uploads/area_logo/abstract_256x256_22.jpg',
                    approved: true,
                    required_points: 0,
                    missing_answers: 0,
                    attachments_count: 0,
                    essential: false,
                    modules: [],
                },
                {
                    pk: 6,
                    name: 'Area Depósito',
                    description:
                        'Esta es la descripción del área deposito, puede tener una gran cantidad de texto.\r\nEsta es la descripción del área deposito, puede tener una gran cantidad de texto.\r\nEsta es la descripción del área deposito, puede tener una gran cantidad de texto.\r\nEsta es la descripción del área deposito, puede tener una gran cantidad de texto.\r\nEsta es la descripción del área deposito, puede tener una gran cantidad de texto.\r\nEsta es la descripción del área deposito, puede tener una gran cantidad de texto.\r\nEsta es la descripción del área deposito, puede tener una gran cantidad de texto.\r\nEsta es la descripción del área deposito, puede tener una gran cantidad de texto.',
                    color: '#1ebe34',
                    logo:
                        'http://112f0757.ngrok.io/media/uploads/area_logo/abstract_256x256_19_Am2Aae1.jpg',
                    approved: true,
                    required_points: 333,
                    missing_answers: 0,
                    attachments_count: 0,
                    essential: false,
                    modules: [],
                },
            ],
        },
    },
]
const arr = [
    { name: 'ramiro', age: 29, profesion: 'fontEnd developer' },
    { name: 'patricio', age: 27, profesion: 'Musician and composer' },
    { name: 'agustin', age: 26, profesion: 'Musician and composer' },
]

const secondArr = [
    { name: 'pedro', age: 31, profesion: 'fullStack developer' },
    { name: 'mariano', age: 30, profesion: 'Profesor' },
    { name: 'nadia', age: 37, profesion: 'Musician and singer' },
]
for (let i = 0; i < secondArr.length; i++) {
    arr.push(secondArr[i])
}
console.log(arr)
for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    for (let i = 0; i < item.length; i++) {
        console.log(item[i])
    }
}
const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => altura < 1.7
const programFilter = ({ program }) => program.editable === true
const areasFilter = ({ essential, missing_answers }) => {
    if (essential && missing_answers > 0) {
        return essential
    }
}
const program = data.filter(programFilter)
const areas = program[0].program.areas
const anotherAreas = data[0].program.areas
const areasEssential = areas.filter(areasFilter)
let personasAltas = personas.filter(esAlta)
let personasBajas = personas.filter(esBaja)
function renderAreas() {
    if (areasEssential.length > 0) {
        return areasEssential
    } else {
        return areas
    }
}
