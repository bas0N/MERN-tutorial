import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AboutLinkIcon from "./components/AboutLinkIcon";
import { FeedbackProvider } from "./context/FeedbackContext";
function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text="Hello World" />
        <div className="container">
          <Route exact path="/">
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
          </Route>
          <Route path="/about" component={AboutPage} />
        </div>
        <AboutLinkIcon />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
