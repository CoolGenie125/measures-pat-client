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
            <div className={classes.closeIcon} onClick={close}>
              <i className='fal fa-times'></i>
            </div>
          </div>
          <div className={classes.closePart} onClick={close}></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
