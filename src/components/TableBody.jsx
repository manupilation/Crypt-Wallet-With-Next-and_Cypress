import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import { actionChangeOrder, actionToggleIsEditing } from '../actions';


const TableBody = () => {
  const dispatch = useDispatch();
  const getExpenses = useSelector((state) => state.wallet.expenses);

  const expenses = [...getExpenses];

  const [droppedValue, setDroppedValue] = useState({});
  const [draggedObj, setDraggedObj] = useState({});

  const [{isOver}, drop] = useDrop(() => ({
    accept: "table",
    drop: (item) => setDroppedValue(item),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  // useEffect(() => {
  //   if (draggedObj && draggedObj.hasOwnProperty('id') && droppedValue && droppedValue.hasOwnProperty('id')) {
  //     handleChangeIds(draggedObj, droppedValue);

  //     setDraggedObj({});
  //     setDroppedValue({});
  //   }
  // }, [droppedValue, draggedObj]);

  const handleChangeIds = (drag, drop) => {
    const dragId = drag.id;
    const removeDragAndDropFromExpenses = expenses
      .filter((ex) => ex.id !== drag.id && ex.id !== drop.id);

    drag.id = drop.id;
    drop.id = dragId;

    const addNewIds = removeDragAndDropFromExpenses.concat(drag, drop).sort((a, b) => a.id - b.id);

    dispatch(actionToggleIsEditing([false, null])); // Set false null to prevent drag expenses during editing
    dispatch(actionChangeOrder(addNewIds));
  }

  return (
    <tbody ref={drop}>
      {expenses && expenses.map((exp, i) =>
        <TableRow exp={exp} key={i} setDraggedObj={setDraggedObj}/>
      )}
    </tbody>
  );
};

TableBody.propTypes = {
  getExpenses: PropTypes.arrayOf(PropTypes.object),
};

export default TableBody;
