import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import AboutPage from "./pages/AboutPage";
import {FeedBackProvider} from "./context/FeedBackContext"
function App(){
    return (
      <FeedBackProvider>
        <Router>
        <Header/>
        <div className="container">
        <Routes>
        <Route exact path="/" element={
          <>
        <FeedbackForm />
        <FeedbackStats />
        <FeedBackList/>
          </>
        }>
       
        </Route>
        <Route path="/about" element={<AboutPage/>}/>
        </Routes>
        </div>
        </Router>
        </FeedBackProvider>
    )
}
export default App;



























