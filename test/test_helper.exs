ExUnit.start

Mix.Task.run "ecto.create", ~w(-r PhoenixAngular_2.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r PhoenixAngular_2.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(PhoenixAngular_2.Repo)

