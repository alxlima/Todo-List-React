import { ChangeEvent } from 'react';
import styles from './Input.module.css'

type Props = {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void

}
export const Input = ({ value, onChange }: Props) => {
    return (
        <div className={styles.container}>
            <input 
                placeholder='Adicione uma nova tarefa'
                value={value}
                onChange={onChange}
            />

        </div>
    )
}