import React from 'react';
import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  list: Todo[];
};

export const TodoList: React.FC<Props> = ({ list }) => (
  <section className="TodoList">
    {list.map((item) => (
      <TodoInfo key={item.id} todo={item} />
    ))}
  </section>
);
