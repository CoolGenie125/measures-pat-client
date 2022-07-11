import { appear } from "config/Animations";
import Reveal from "react-awesome-reveal";
import { useStyles } from "./SearchPanelStyles";

interface SearchPanelProps {
  show: boolean;
  input: (e: any) => void;
  close: () => void;
}

export default function SearchPanel({ show, input, close }: SearchPanelProps) {
  const classes = useStyles();

  const handleInput = (e: any) => {
    input(e.target.value);
  };

  return (
    <>
      {show ? (
        <>
          <div className={classes.root}>
            <input
              className={classes.searchInput}
              onChange={(e) => handleInput(e)}
              placeholder='検索語を入力してください'
            />
            <Reveal
              keyframes={appear}
              triggerOnce
              delay={2000}
              className={classes.closeIcon}>
              <i className='fal fa-times' onClick={close}></i>
            </Reveal>
          </div>
          <div className={classes.closePart} onClick={close}></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
