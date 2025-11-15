import React, { useMemo, useState } from 'react';
import Button from '../components/Button';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between p-2 border-b last:border-b-0">
      <div className="flex items-center gap-3">
        <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
        <div>
          <div className={task.completed ? 'line-through text-gray-500' : ''}>{task.title}</div>
          {task.note && <div className="text-xs text-gray-500">{task.note}</div>}
        </div>
      </div>
      <div>
        <Button variant="danger" onClick={() => onDelete(task.id)}>Delete</Button>
      </div>
    </div>
  );
}

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage('tasks:v1', [
    { id: 1, title: 'Sample task', note: '', completed: false }
  ]);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [filter, setFilter] = useState('all');

  const add = () => {
    if (!title.trim()) return;
    setTasks(prev => [{ id: Date.now(), title: title.trim(), note: note.trim(), completed: false }, ...prev]);
    setTitle(''); setNote('');
  };

  const toggle = id => setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const del = id => setTasks(prev => prev.filter(t => t.id !== id));

  const filtered = useMemo(() => {
    if (filter === 'active') return tasks.filter(t => !t.completed);
    if (filter === 'completed') return tasks.filter(t => t.completed);
    return tasks;
  }, [tasks, filter]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Task Manager</h1>
      </div>

      <Card>
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="flex-1 px-3 py-2 border rounded dark:bg-gray-800"
              placeholder="Task title"
            />
            <input
              value={note}
              onChange={e => setNote(e.target.value)}
              className="w-60 px-3 py-2 border rounded dark:bg-gray-800"
              placeholder="Note (optional)"
            />
            <Button onClick={add}>Add</Button>
          </div>

          <div className="flex items-center gap-2">
            <Button variant={filter === 'all' ? 'primary' : 'secondary'} onClick={() => setFilter('all')}>All</Button>
            <Button variant={filter === 'active' ? 'primary' : 'secondary'} onClick={() => setFilter('active')}>Active</Button>
            <Button variant={filter === 'completed' ? 'primary' : 'secondary'} onClick={() => setFilter('completed')}>Completed</Button>
          </div>

          <div className="mt-2 border rounded">
            {filtered.length === 0 ? (
              <div className="p-4 text-center text-gray-500">No tasks</div>
            ) : (
              filtered.map(t => (
                <TaskItem key={t.id} task={t} onToggle={toggle} onDelete={del} />
              ))
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}