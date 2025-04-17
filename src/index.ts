import * as json_props from './config/config.json';
import { PublishObservations } from './publishing/PublishObservations';
import * as fs from 'fs';

/**
 * Starts the replay of observations.
 */
async function main() {
    const publish_observations = new PublishObservations(json_props.locations, json_props.file_location, json_props.frequency_event, json_props.frequency_buffer, json_props.is_ldes, json_props.tree_path);
    await publish_observations.replay_observations();
}

main().then(() => {
    console.log(`Starting the replay of observations`);
    fs.appendFileSync('replayer-log.csv', `start_replayer,${new Date().getTime()}\n`);
});