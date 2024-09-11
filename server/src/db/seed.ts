import { client, db } from '.'
import { goalCompletions, goals } from './schema'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  await db.insert(goals).values([
    { title: 'Acordar cedo', desiredWeeklyFrequency: 5 },
    { title: 'Me exercitar', desiredWeeklyFrequency: 2 },
    { title: 'Meditar', desiredWeeklyFrequency: 1 },
  ])
}

async function main() {
    try {
      await seed();
      console.log('Seeding completed');
    } catch (error) {
      console.error('Error during seeding:', error);
      process.exit(1);
    }
  }
  main();
