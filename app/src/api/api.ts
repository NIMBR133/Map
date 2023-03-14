import { toast } from 'react-toastify'

import { LngLat } from '@interfaces'

import { apiFetch } from './apiFetch'

export const api = {
  startSimulation: async (
    isStarted: boolean,
    setIsStarted: (value: React.SetStateAction<boolean>) => void
  ) => {
    if (!isStarted) {
      try {
        await apiFetch.startSimulation()
        setIsStarted(true)
        toast.success('Симуляция успешно запущена 👌')
      } catch {
        toast.error('Ошибка! Симуляция не запущена')
      }
    } else {
      toast.warn('Симуляция уже запущена')
    }
  },

  stopSimulation: async (
    isStarted: boolean,
    setIsStarted: (value: React.SetStateAction<boolean>) => void
  ) => {
    if (isStarted) {
      try {
        await apiFetch.stopSimulation()
        setIsStarted(false)
        toast.success('Симуляция успешно остановлена 👌')
      } catch {
        toast.error('Ошибка! Симуляция не остановлена')
      }
    } else {
      toast.warn('Симуляция ещё не запущена')
    }
  },

  deleteMarker: async (id: string) => {
    try {
      await apiFetch.deleteCar(id)
      toast.success('Маркер успешно удалён 👌')
    } catch {
      toast.error('При удалении произошла ошибка')
    }
  },

  createMarker: async (data: { name: string }, coordinates?: LngLat) => {
    if (data.name && coordinates) {
      try {
        await apiFetch.createCar({
          ...data,
          coordinates: {
            lng: Number(coordinates?.lng),
            lat: Number(coordinates?.lat)
          }
        })
        toast.success('Маркер успешно добавлен 👌')
      } catch {
        toast.error('Произошла ошибка')
      }
    } else {
      toast.warn('Не все поля заполнены')
    }
  }
}
