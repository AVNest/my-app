import './app-info.css'; 

const AppInfo = ({employers, increased}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников РТРС</h1>
            <h2>Общее число сотрудников: {employers}</h2>
            <h2>Получают премию : {increased}</h2>
        </div>
    )
}

export default AppInfo;