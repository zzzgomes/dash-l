import {useState, useEffect} from 'react'
import Menu from "components/menu"
import axios from "axios"
import {Main, Dash1, Dash2, Dash3, Dash4} from './style'
import {ReactComponent as ShoppingBag} from "assets/images/shoppingBag.svg";
import {ReactComponent as ArrowLeft} from "assets/images/arrowLeft.svg";
import {ReactComponent as ArrowRight} from "assets/images/arrowRight.svg";
import {ReactComponent as AddContact} from "assets/images/addContact.svg";
import FilterDate from "./filterDate";
import {Line, Bar, Pie} from "react-chartjs-2";



const Dashboard = (props) => {
    const [dataInvestment, setDataInvestment] = useState({})
    const [dataCompare, setDataCompare] = useState({})
    const [dataEntry, setDataEntry] = useState({})
    const [dataMarry, setDataMarry] = useState({})
    const [dataTag, setDataTag] = useState([])
    const [dataService, setDataService] = useState([])
    const [dataProvider, setDataProvider] = useState([])

    useEffect(() => {

        const getData = async () => {
            let {data} = await axios.get('https://lejour-dash.herokuapp.com/dash')
            console.log(data)
            setDataTag(data.tagsPesquisadas.tags)
            setDataService(data.servicosMaisContratados.tags)
            setDataProvider(data.fornecedores.tags)
            setDataMarry({
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                datasets: [
                    {
                        label: 'Cancelado',
                        data: [data.casamento.saida.janeiro, data.casamento.saida.fevereiro, data.casamento.saida.marco, data.casamento.saida.abril, data.casamento.saida.maio, data.casamento.saida.junho, data.casamento.saida.julho, data.casamento.saida.agosto, data.casamento.saida.setembro, data.casamento.saida.outubro, data.casamento.saida.novembro, data.casamento.saida.dezembro],
                        fill: false,
                        backgroundColor: '#db5d79',
                        borderColor: 'rgba(219, 93, 121, 0.3)',
                    }, {
                        label: 'Realizado',
                        data: [data.casamento.entrada.janeiro, data.casamento.entrada.fevereiro, data.casamento.entrada.marco, data.casamento.entrada.abril, data.casamento.entrada.maio, data.casamento.entrada.junho, data.casamento.entrada.julho, data.casamento.entrada.agosto, data.casamento.entrada.setembro, data.casamento.entrada.outubro, data.casamento.entrada.novembro, data.casamento.entrada.dezembro],
                        fill: false,
                        backgroundColor: '#86d0cb',
                        borderColor: 'rgba(134,208,203,0.3)',
                    },
                ],
            })
            setDataEntry({
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                datasets: [
                    {
                        label: 'Venda',
                        data: [data.entradaCaixa.saida.janeiro, data.entradaCaixa.saida.fevereiro, data.entradaCaixa.saida.marco, data.entradaCaixa.saida.abril, data.entradaCaixa.saida.maio, data.entradaCaixa.saida.junho, data.entradaCaixa.saida.julho, data.entradaCaixa.saida.agosto, data.entradaCaixa.saida.setembro, data.entradaCaixa.saida.outubro, data.entradaCaixa.saida.novembro, data.entradaCaixa.saida.dezembro],
                        fill: false,
                        backgroundColor: '#84b8e2',
                        borderColor: 'rgba(132, 184, 226, 0.3)',
                    }, {
                        label: 'Lucro',
                        data: [data.entradaCaixa.entrada.janeiro, data.entradaCaixa.entrada.fevereiro, data.entradaCaixa.entrada.marco, data.entradaCaixa.entrada.abril, data.entradaCaixa.entrada.maio, data.entradaCaixa.entrada.junho, data.entradaCaixa.entrada.julho, data.entradaCaixa.entrada.agosto, data.entradaCaixa.entrada.setembro, data.entradaCaixa.entrada.outubro, data.entradaCaixa.entrada.novembro, data.entradaCaixa.entrada.dezembro],
                        fill: false,
                        backgroundColor: '#86d0cb',
                        borderColor: 'rgba(134,208,203,0.3)',
                    },
                ],
            })
            setDataCompare({
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                datasets: [
                    {
                        label: 'Entrou',
                        data: [data.conversaoVenda.mes[0].entrou, data.conversaoVenda.mes[1].entrou, data.conversaoVenda.mes[2].entrou, data.conversaoVenda.mes[3].entrou, data.conversaoVenda.mes[4].entrou, data.conversaoVenda.mes[5].entrou, data.conversaoVenda.mes[6].entrou, data.conversaoVenda.mes[7].entrou, data.conversaoVenda.mes[8].entrou, data.conversaoVenda.mes[9].entrou, data.conversaoVenda.mes[10].entrou, data.conversaoVenda.mes[10].entrou],
                        backgroundColor: '#84B8E2',
                    },
                    {
                        label: 'Orçamento',
                        data: [data.conversaoVenda.mes[0].orcou, data.conversaoVenda.mes[1].orcou, data.conversaoVenda.mes[2].orcou, data.conversaoVenda.mes[3].orcou, data.conversaoVenda.mes[4].orcou, data.conversaoVenda.mes[5].orcou, data.conversaoVenda.mes[6].orcou, data.conversaoVenda.mes[7].orcou, data.conversaoVenda.mes[8].orcou, data.conversaoVenda.mes[9].orcou, data.conversaoVenda.mes[10].orcou, data.conversaoVenda.mes[11].orcou],
                        backgroundColor: '#86D0CB',
                    },
                    {
                        label: 'Agendou',
                        data: [data.conversaoVenda.mes[0].agendou, data.conversaoVenda.mes[1].agendou, data.conversaoVenda.mes[2].agendou, data.conversaoVenda.mes[3].agendou, data.conversaoVenda.mes[4].agendou, data.conversaoVenda.mes[5].agendou, data.conversaoVenda.mes[6].agendou, data.conversaoVenda.mes[7].agendou, data.conversaoVenda.mes[8].agendou, data.conversaoVenda.mes[9].agendou, data.conversaoVenda.mes[10].agendou, data.conversaoVenda.mes[11].agendou],
                        backgroundColor: '#FFB854',
                    },
                    {
                        label: 'Contratou',
                        data: [data.conversaoVenda.mes[0].contratou, data.conversaoVenda.mes[1].contratou, data.conversaoVenda.mes[2].contratou, data.conversaoVenda.mes[3].contratou, data.conversaoVenda.mes[4].contratou, data.conversaoVenda.mes[5].contratou, data.conversaoVenda.mes[6].contratou, data.conversaoVenda.mes[7].contratou, data.conversaoVenda.mes[8].contratou, data.conversaoVenda.mes[9].contratou, data.conversaoVenda.mes[10].contratou, data.conversaoVenda.mes[11].contratou],
                        backgroundColor: '#DB5D79',
                    },
                ],
            })
            setDataInvestment({
                labels: ['10k a 20k', '20k a 30k', '30k a 40k', '40k a 50k'],
                datasets: [
                    {
                        data: [data.faixaInvestimento.faixas[0].total, data.faixaInvestimento.faixas[1].total, data.faixaInvestimento.faixas[2].total, data.faixaInvestimento.faixas[3].total],
                        backgroundColor: [
                            '#84B8E2',
                            '#86D0CB',
                            '#FFB854',
                            '#DB5D79',
                        ],
                        borderWidth: 1,
                    },
                ],
            })
        }

        getData()
    }, [])
    return <>
        <Menu/>

        <Main>
            <button>Exportar excel</button>
            <Dash1>
                <div className='investment'>
                    <h3>Faixa de investimento</h3>
                    <FilterDate/>
                    <Pie data={dataInvestment} options={{
                        maintainAspectRatio: false,
                        legend: {
                            position: 'bottom',

                            labels: {
                                padding: 50,
                                usePointStyle:true,
                                fontColor: '#585858'
                            }
                        }
                    }}/>
                </div>
                <div className='sales'>
                    <h3>Comparativo de vendas</h3>
                    <Bar data={dataCompare} options={{

                        maintainAspectRatio: false,
                        legend: {
                            position: 'bottom',

                            labels: {
                                padding: 50,
                                usePointStyle:true,
                                fontColor: '#585858'
                            }
                        },
                        scales: {
                            yAxes: [
                                {
                                    stacked: true,
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                },
                            ],
                            xAxes: [
                                {
                                    gridLines: false,
                                    barPercentage: 0.4,
                                    stacked: true,
                                },
                            ],
                        }
                    }}/>
                </div>
            </Dash1>
            <Dash2>
                <div className='entry'>
                    <h3>Entrada de caixa</h3>
                    <Line
                        data={dataEntry}
                        options={{
                            responsive: true,
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            autoSkip: true,
                                            maxTicksLimit: 10,
                                            beginAtZero: true
                                        },
                                        gridLines: {
                                            display: false
                                        }
                                    }
                                ],
                                xAxes: [
                                    {
                                        gridLines: {
                                            display: false
                                        }
                                    }
                                ]
                            },
                            legend: {
                                position: 'bottom',

                                labels: {
                                    padding: 50,
                                    usePointStyle:true,
                                    fontColor: '#585858'
                                }
                            }
                        }}
                    />
                </div>

                <div className='marry'>
                    <h3>Casamento</h3>
                    <Line
                        data={dataMarry}
                        options={{
                            responsive: true,
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            autoSkip: true,
                                            maxTicksLimit: 10,
                                            beginAtZero: true
                                        },
                                        gridLines: {
                                            display: false
                                        }
                                    }
                                ],
                                xAxes: [
                                    {
                                        gridLines: {
                                            display: false
                                        }
                                    }
                                ]
                            },
                            legend: {
                                position: 'bottom',

                                labels: {
                                    padding: 50,
                                    usePointStyle:true,
                                    fontColor: '#585858'
                                }
                            }
                        }}
                    />
                </div>

            </Dash2>
            <Dash3>
                <div className='tags'>
                    <h3>Tags mais pesquisadas</h3>
                    <FilterDate/>
                    <ul>
                        {dataTag.map(x => <li><span>{x.nome}</span>
                            <span className='value'>{x.total}</span>
                        </li>)}
                    </ul>
                    <button>Ver todos</button>
                </div>
                <div className='services'>
                    <h3>Serviços mais contratados</h3>
                    <FilterDate/>
                    <ul>
                        {dataService.map(x => <li><span>{x.nome}</span>
                            <span className='value'>{x.total}</span>
                        </li>)}
                    </ul>
                    <button>Ver todos</button>
                </div>
                <div className='provider'>
                    <h3>Ranking de Forncedores</h3>
                    <FilterDate/>
                    <ul>
                        {dataProvider.map(x => <li><span>{x.nome}</span>
                            <span className='value'>{x.total}</span>
                        </li>)}
                    </ul>
                    <button>Ver todos</button>
                </div>
            </Dash3>
        </Main>
    </>
}

export default Dashboard